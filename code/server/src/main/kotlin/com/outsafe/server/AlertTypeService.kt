package com.outsafe.server

import com.outsafe.server.data.model.Alert
import com.outsafe.server.data.model.AlertType
import com.outsafe.server.data.model.Custom
import jakarta.validation.constraints.Null
import org.springframework.stereotype.Service


private fun makeMessage(alert: Alert, custom: Custom): String {
    return (if (alert.drill == true) {
        alert.alertType.toString().plus(" Drill")
    } else {
        alert.alertType.toString()
    }).plus(if (custom.message != "") {" ".plus(custom.message)} else {""})
}

@Service
class AlertTypeService {
    private var alert: Alert = Alert(AlertType.Safe, false)
    private var customMessage: Custom = Custom("")

    fun getAlert(): String = makeMessage(alert, customMessage)

    fun setAlert(newAlert: Alert): String {
        alert = newAlert
        return makeMessage(alert, customMessage)
    }

    fun customAlert(message: Custom): String? {
        customMessage = message
        return customMessage.message
    }
}