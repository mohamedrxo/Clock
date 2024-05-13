import { Box, CircularProgress,Text,Center } from '@chakra-ui/react'
import { useState ,useEffect} from 'react';
export default function Clock()
{
    const [timeDifferences, setTimeDifference] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
        milliseconds: 0
      });
      function calculateTimeDifference(futureDate) {
        // Current date
        var currentDate = new Date();
        
        // Convert future date string to a Date object
        var futureDateObject = new Date(futureDate);
        
        // Calculate the time difference in milliseconds
        var timeDifference = futureDateObject.getTime() - currentDate.getTime();
        
        // Calculate days, hours, minutes, seconds, and milliseconds
        var days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        var hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
        var milliseconds = timeDifference % 1000;
    
        return {
            days: days,
            hours: hours,
            minutes: minutes,
            seconds: seconds,
            milliseconds: milliseconds
        };
    }


      useEffect(() => {
        const intervalId = setInterval(() => {
          const currentDate = new Date();
          const futureDateObject = new Date(futureDate);
          const timeDifference = futureDateObject - currentDate;
          const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
          const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
          const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
          const milliseconds = timeDifference % 1000;
          setTimeDifference({
            days: days,
            hours: hours,
            minutes: minutes,
            seconds: seconds,
            milliseconds: milliseconds
          });
        }, 1);
    
        return () => clearInterval(intervalId);
      }, [futureDate]);
    
      // set the time to your date
    var futureDate = "2024-06-03T12:00:00"; // Example future date
    var timeDifference = calculateTimeDifference(futureDate);

    
    return <Box >
        <Box mt={'15%'}>
        <Text ml={"33%"} mb='2%' fontSize='4xl' >node thfede Lwatani  b9at lih  : </Text>
      <Text ml={"2%" } mt='3%' fontSize='5xl'>{timeDifference.days} Days  : { timeDifference.hours }  Hours    : {timeDifference.minutes}  Minutes  : {timeDifference.seconds}  Seconds  : {timeDifference.milliseconds}  Milliseconds</Text>
      </Box>
    </Box>
    
}