defmodule PitchIn.Accounts do
  @moduledoc """
  The Accounts context.
  """

  import Ecto.Query, warn: false
  alias PitchIn.Repo

  alias PitchIn.Accounts.User

  def list_users do
    Repo.all(User)
  end

  def get_user!(id), do: Repo.get!(User, id)

  def create_user(attrs \\ %{}) do
    %User{}
    |> User.changeset(attrs)
    |> Repo.insert()
  end

  def update_user(%User{} = user, attrs) do
    user
    |> User.changeset(attrs)
    |> Repo.update()
  end

  def change_user(%User{} = user) do
    User.changeset(user, %{})
  end

  def complete_user(user) do
    if user.is_staffer && !user.is_complete do
      changeset = User.complete_changeset(user)

      case Repo.update(changeset) do
        {:ok, user} -> user
        {:error, _} -> user
      end
    else
      user
    end
  end

  def make_user_staffer(user) do
    if user.is_staffer do
      user
    else
      changeset = User.staffer_changeset(user)

      case Repo.update(changeset) do
        {:ok, user} -> user
        {:error, _} -> user
      end
    end
  end
end
