package com.outsafe.server.data.model

import jakarta.persistence.*

@Entity
@Table(name = "watch")
data class Watch(
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    val id: Long = 0,
    @Column(name = "ip_address", nullable = false, unique = true)
    var ip: String = ""
)
