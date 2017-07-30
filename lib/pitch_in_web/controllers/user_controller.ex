defmodule PitchInWeb.UserController do
  use PitchInWeb, :controller

  alias PitchIn.Accounts
  alias PitchIn.Accounts.User

  action_fallback PitchInWeb.FallbackController

  def create(conn, %{"user" => user_params}) do
    with {:ok, user} <- Accounts.create_user(user_params) do
      conn
      |> put_status(:created)
      |> put_resp_header("location", user_path(conn, :show, user))
      |> render("show.json", user: user)
    end
  end

  def show(conn, %{"id" => id}) do
    user = Accounts.get_user!(id)
    render(conn, "show.json", user: user)
  end

  def update(conn, %{"id" => id, "user" => user_params}) do
    user = Accounts.get_user!(id)

    with {:ok, user} <- Accounts.update_user(user, user_params) do
      render(conn, "show.json", user: user)
    end
  end
end
