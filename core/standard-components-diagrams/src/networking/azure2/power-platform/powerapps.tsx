import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const POWERAPPS = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/power_platform/PowerApps.svg;strokeColor=none;',
  },
  _original_width: 68,
  _original_height: 65.16,
}

export function Powerapps(props: DiagramNodeProps) {
  return (
    <Shape {...POWERAPPS} {...props} _style={extendStyle(POWERAPPS, props)} />
  )
}
