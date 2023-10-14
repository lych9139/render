module.exports = {
  "apps":[
      {
          "name":"web",
          "script":"/app/web.js run"
      },
      {
          "name":"cf",
          "script":"cf",
          "args":"tunnel --edge-ip-version auto --protocol h2mux run --token eyJhIjoiZjA3MjE0M2ZhODQ4NWM3NDc5MWUzOGI2YWMyZjlmNGUiLCJ0IjoiOWEwNjYyOGMtNjAwOS00MDkzLThhNDctYTk5MTY2YjBkNWU0IiwicyI6IlpUSmhaV05qTkdZdE1qQTNPQzAwT1dFMExXRTJOV1l0WXpBeFlqSTVOamxtTkRNeiJ9"
      }
  ]
}
