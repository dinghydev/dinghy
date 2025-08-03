import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const DEFENDER_FREEZER_MONITOR = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/other/Defender_Freezer_Monitor.svg;strokeColor=none;',
  _width: 47.599999999999994,
  _height: 68,
}

export function DefenderFreezerMonitor(props: DiagramNodeProps) {
  return <Shape {...DEFENDER_FREEZER_MONITOR} {...props} />
}
