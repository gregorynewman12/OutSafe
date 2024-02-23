package com.outsafe.server

import com.outsafe.server.data.WatchRepository
import com.outsafe.server.data.model.Watch
import org.springframework.stereotype.Service

@Service
class WatchService(private val watchRepository: WatchRepository) {
    fun getAllWatches(): List<Watch> = watchRepository.getAllWatches()

    fun getWatchesById(id: Long): Watch = watchRepository.findWatchById(id)

    fun createWatch(watch: Watch) = watchRepository.save(watch)
}