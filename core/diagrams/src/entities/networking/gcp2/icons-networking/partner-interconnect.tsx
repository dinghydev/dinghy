import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const PARTNER_INTERCONNECT = {
  _style: {
    entity:
      'sketch=0;html=1;verticalAlign=top;labelPosition=center;verticalLabelPosition=bottom;align=center;spacingTop=-6;fontSize=11;fontStyle=1;fontColor=#999999;shape=image;aspect=fixed;imageAspect=0;image=data:image/svg+xml,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnY9Imh0dHBzOi8vdmVjdGEuaW8vbmFubyIgd2lkdGg9IjIwIiBoZWlnaHQ9IjEzLjUxOTk5OTUwNDA4OTM1NSIgdmlld0JveD0iMCAtMi4wNjA1NzM0NTA4OTU1MTA2ZS0xNSAyMCAxMy41MTk5OTk1MDQwODkzNTUiPiYjeGE7CTxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+JiN4YTsJLnN0MHtmaWxsOiM0Mjg1ZjQ7fSYjeGE7CS5zdDF7ZmlsbDojNjY5ZGY2O30mI3hhOwkuc3Qye2ZpbGw6I2FlY2JmYTt9JiN4YTsJPC9zdHlsZT4mI3hhOwk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNOS4xOSAxLjYyaDEuNjJ2MTAuMjdIOS4xOXoiLz4mI3hhOwk8cGF0aCBjbGFzcz0ic3QxIiBkPSJNMCA1Ljk1aDIuN3YxLjYySDB6Ii8+JiN4YTsJPHJlY3QgY2xhc3M9InN0MCIgeD0iMi40MyIgeT0iMy41MiIgd2lkdGg9IjQuODYiIGhlaWdodD0iNi40OSIgcng9Ii4yNCIvPiYjeGE7CTxnIGNsYXNzPSJzdDEiPiYjeGE7CQk8cGF0aCBkPSJNOS4xOSAxLjYyaDEuNjJ2MTAuMjdIOS4xOXptOC4xMSA0LjMzSDIwdjEuNjJoLTIuN3oiLz4mI3hhOwkJPHBhdGggZD0iTTQuNTkgMTEuOXYxLjMzYS4yOS4yOSAwIDAgMCAuMjkuMjloMTAuMjRhLjI5LjI5IDAgMCAwIC4yOS0uMjloMFYxMS45ek0xNS4xMiAwSDQuODhhLjI5LjI5IDAgMCAwLS4yOS4yOWgwdjEuMzNoMTAuODJWLjI5YS4yOS4yOSAwIDAgMC0uMjktLjI5eiIvPiYjeGE7CTwvZz4mI3hhOwk8cmVjdCBjbGFzcz0ic3QwIiB4PSIxMi43IiB5PSIzLjUyIiB3aWR0aD0iNC44NiIgaGVpZ2h0PSI2LjQ5IiByeD0iLjI0Ii8+JiN4YTs8L3N2Zz4=;strokeColor=none;',
  },
  _width: 42,
  _height: 29,
}

export function PartnerInterconnect(props: DiagramNodeProps) {
  return (
    <Shape
      {...PARTNER_INTERCONNECT}
      {...props}
      _style={extendStyle(PARTNER_INTERCONNECT, props)}
    />
  )
}
