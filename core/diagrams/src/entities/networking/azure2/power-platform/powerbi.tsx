import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const POWERBI = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/power_platform/PowerBI.svg;strokeColor=none;',
  },
  _original_width: 51,
  _original_height: 68,
}

export function Powerbi(props: DiagramNodeProps) {
  return <Shape {...POWERBI} {...props} _style={extendStyle(POWERBI, props)} />
}
