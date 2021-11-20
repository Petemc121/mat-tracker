CREATE DATABASE mat_tracker

CREATE TABLE members(
    member_id SERIAL PRIMARY KEY,
    member_name VARCHAR(255),
    member_image BYTEA, 
    member_phone VARCHAR(255),
    member_belt VARCHAR(255),
    member_joined_at VARCHAR(255),
    member_paid VARCHAR(255),
    member_frozen VARCHAR(255)
);

