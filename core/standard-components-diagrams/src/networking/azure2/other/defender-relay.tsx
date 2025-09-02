import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DEFENDER_RELAY = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/other/Defender_Relay.svg;strokeColor=none;',
  },
  _original_width: 68,
  _original_height: 27.200000000000003,
}

export function DefenderRelay(props: DiagramNodeProps) {
  return (
    <Shape
      {...DEFENDER_RELAY}
      {...props}
      _style={extendStyle(DEFENDER_RELAY, props)}
    />
  )
}
