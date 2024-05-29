package org.example.vibeshot.Entity;

import jakarta.persistence.Entity;
import lombok.*;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class Video extends Media {
    private int duration;
    private String format;
    private String resolution;
}
