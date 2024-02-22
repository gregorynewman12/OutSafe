package com.outsafe.server

import com.outsafe.server.data.model.Alert
import com.outsafe.server.data.model.AlertType
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PutMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RestController

@RestController
class AlertTypeController(private val alertTypeService: AlertTypeService) {
    @GetMapping("/alert")
    fun getAlert() = alertTypeService.getAlert()

    @PutMapping("/set")
    fun setAlert(@RequestBody payload: Alert) = alertTypeService.setAlert(payload)
}