import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const DEFENDER_RELAY = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/other/Defender_Relay.svg;strokeColor=none;',
  _width: 68,
  _height: 27.200000000000003,
}

export function DefenderRelay(props: DiagramNodeProps) {
  return <Shape {...DEFENDER_RELAY} {...props} />
}
