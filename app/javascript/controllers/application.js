import { Application } from "@hotwired/stimulus"

const application = Application.start()

// Configure Stimulus development experience
application.debug = false
config.assets.debug = false
window.Stimulus   = application

export { application }
