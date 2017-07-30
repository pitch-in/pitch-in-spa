defmodule PitchInWeb.Router do
  use PitchInWeb, :router

  pipeline :browser do
  end

  pipeline :api do
    plug :accepts, ["json"]
  end

  scope "/", PitchInWeb do
    pipe_through :browser

    get "/", StaticController, :app
  end

  scope "/api", PitchInWeb do
    pipe_through :api

    get "/search", SearchController, :index

    resources "/campaigns", CampaignController, only: [:index, :show, :create, :update]
    resources "/needs", AskController, only: [:index, :show, :create, :update]
    resources "/answers", AnswerController, only: [:index, :show, :create, :update]

    resources "/search-alerts", SearchAlertController, only: [:index, :create, :delete]

    resources "/prefilled-asks", PrefilledAskController, only: [:create]

    resources "/users", UserController, only: [:create, :show, :update]
    resources "/pros", ProController, only: [:show, :update]
    resources "/forgot-password", ForgotPasswordController, only: [:create, :update]
    resources "/referrals", ReferralController, only: [:index, :create]

    resources "/sessions", SessionController, only: [:create, :delete]

    resources "/contact-us", ContactUsController, only: [:create]
  end
end
