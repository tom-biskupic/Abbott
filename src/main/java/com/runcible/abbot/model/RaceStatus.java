package com.runcible.abbot.model;

public enum RaceStatus
{
    NOT_RUN,
    CANCELLED,
    COMPLETED;
    
    private static final String[] DISPLAY_STRINGS =
    {
        "Not run",
        "Cancelled",
        "Completed"
    };
    
    public String toDisplayString()
    {
        return DISPLAY_STRINGS[this.ordinal()];
    }
    
    public static RaceStatus fromDisplayString(String value)
    {
        for( RaceStatus r : RaceStatus.values())
        {
            if ( r.toDisplayString().equals(value) )
            {
                return r;
            }
        }
        
        throw new IllegalArgumentException("Invalid RaceStatus value "+value);
    }

}