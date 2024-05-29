package org.example.vibeshot.Entity;

import jakarta.persistence.Entity;
import lombok.*;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class Image extends Media {
    private int width;
    private int height;
    private String resolution;
}
