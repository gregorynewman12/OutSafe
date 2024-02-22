package com.outsafe.server

import com.outsafe.server.data.model.Watch
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RestController

@RestController
class WatchController(private val watchService: WatchService) {
    @GetMapping("/watches")
    fun getWatches(): List<Watch> = watchService.getAllWatches()

    @GetMapping("/watches/{id}")
    fun getWatch(@PathVariable("id") id: Long): Watch = watchService.getWatchesById(id)

    @PostMapping("/watches")
    fun postWatch(@RequestBody payload: Watch) = watchService.createWatch(payload)
}