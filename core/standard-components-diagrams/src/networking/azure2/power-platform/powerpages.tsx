import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const POWERPAGES = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/power_platform/PowerPages.svg;strokeColor=none;',
  },
  _original_width: 68,
  _original_height: 68,
}

export function Powerpages(props: DiagramNodeProps) {
  return (
    <Shape {...POWERPAGES} {...props} _style={extendStyle(POWERPAGES, props)} />
  )
}
