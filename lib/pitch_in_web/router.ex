defmodule PitchInWeb.Router do
  use PitchInWeb, :router

  pipeline :api do
    plug :accepts, ["json"]
  end

  scope "/api", PitchInWeb do
    pipe_through :api
  end
end
