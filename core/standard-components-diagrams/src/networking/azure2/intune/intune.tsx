import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const INTUNE = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/intune/Intune.svg;strokeColor=none;',
  },
  _original_width: 68,
  _original_height: 62,
}

export function Intune(props: DiagramNodeProps) {
  return <Shape {...INTUNE} {...props} _style={extendStyle(INTUNE, props)} />
}
