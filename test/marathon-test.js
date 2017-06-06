describe('timeToDecimal(time)', function() {
  it('receives a string as a time and returns a float of the converted time to decimal', function() {
    expect(timeToDecimal("0:15:0")).toEqual(0.25)
    expect(timeToDecimal("1:45:30")).toEqual(1.7583)
    expect(timeToDecimal("3:22:08")).toEqual(3.3689)
  })
})


describe('decimalToTime(time)', function(){
  it('receives a time as a decimal and returns a string with hours:minutes:seconds', function(){
    expect(decimalToTime(1.5)).toEqual("01:30:00")
    expect(decimalToTime(2.3125)).toEqual("02:18:45")
    expect(decimalToTime(0.9256)).toEqual("00:55:32")
  })
})

describe('paceToMarathonTime(pace)', function(){
  it('receives a string (pace) and returns the calculated marathon time at that pace',function(){
    expect(paceToMarathonTime("00:06:50")).toEqual("Expected marathon time 02:59:03")
    expect(paceToMarathonTime("00:10:01")).toEqual("Expected marathon time 04:22:22")
    expect(paceToMarathonTime("00:08:44")).toEqual("Expected marathon time 03:48:53")
  })
})

describe('marathonToPacePerMile(time)', function(){
  it('receives a marathon time and returns the pace per mile to complete at that time', function(){
    expect(marathonToPacePerMile("2:59:02")).toEqual("Pace time 06:50")
    expect(marathonToPacePerMile("4:05:16")).toEqual("Pace time 09:22")
  })
})
