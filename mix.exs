defmodule PitchIn.Mixfile do
  use Mix.Project

  def project do
    [
      app: :pitch_in,
      version: "0.0.1",
      elixir: "~> 1.4",
      elixirc_paths: elixirc_paths(Mix.env),
      compilers: [:phoenix, :gettext] ++ Mix.compilers,
      start_permanent: Mix.env == :prod,
      aliases: aliases(),
      deps: deps()
    ]
  end

  # Configuration for the OTP application.
  #
  # Type `mix help compile.app` for more information.
  def application do
    [
      mod: {PitchIn.Application, []},
      extra_applications: [:logger, :runtime_tools]
    ]
  end

  # Specifies which paths to compile per environment.
  defp elixirc_paths(:test), do: ["lib", "test/support", "test/mocks"]
  defp elixirc_paths(_),     do: ["lib"]

  # Specifies your project dependencies.
  #
  # Type `mix help deps` for examples and options.
  defp deps do
    [
      {:phoenix, "~> 1.3.0"},
      {:phoenix_pubsub, "~> 1.0"},
      {:phoenix_ecto, "~> 3.2"},
      {:postgrex, ">= 0.0.0"},
      {:gettext, "~> 0.11"},
      {:cowboy, "~> 1.0"},


      {:corsica, "~> 1.0"},
      {:timex, "~> 3.1.7"},
      {:timex_ecto, "~> 3.1.1"},
      {:ecto_enum, "~> 1.0"},
      {:comeonin, "~> 3.0.0"},
      {:bamboo, "~> 0.8"},
      {:basic_auth, "~> 2.0"},
      {:sentry, "~> 3.0.0"},
      {:hackney, "~> 1.7.0", override: true},
      {:httpoison, "~> 0.11.1"},
      {:poison, "~> 2.0"},
      {:credo, "~> 0.8.1", only: [:dev, :test], runtime: false},
      {:ex_machina, "~> 2.0", only: :test}
    ]
  end

  # Aliases are shortcuts or tasks specific to the current project.
  # For example, to create, migrate and run the seeds file at once:
  #
  #     $ mix ecto.setup
  #
  # See the documentation for `Mix` for more info on aliases.
  defp aliases do
    [
      "ecto.setup": ["ecto.create", "ecto.migrate", "run priv/repo/seeds.exs"],
      "ecto.reset": ["ecto.drop", "ecto.setup"],
      "db.migrate": ["ecto.migrate", "ecto.dump"],
      "db.rollback": ["ecto.rollback", "ecto.dump"],
      "test": ["ecto.create --quiet", "ecto.migrate", "test"]
    ]
  end
end
