package com.outsafe.server.data

import com.outsafe.server.data.model.Watch
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.data.jpa.repository.Query
import org.springframework.stereotype.Repository

@Repository
interface WatchRepository : JpaRepository<Watch, Long> {
    fun findWatchById(id: Long): Watch

    @Query(value = "SELECT * FROM watch", nativeQuery = true)
    fun getAllWatches(): List<Watch>
}