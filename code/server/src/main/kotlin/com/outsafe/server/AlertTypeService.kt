package com.outsafe.server

import com.outsafe.server.data.model.AlertType
import org.springframework.stereotype.Service

@Service
class AlertTypeService {
    private var alertType: AlertType = AlertType.Safe

    fun getAlert(): AlertType = alertType

    fun setAlert(alert: AlertType): AlertType {
        alertType = alert
        return alertType
    }
}