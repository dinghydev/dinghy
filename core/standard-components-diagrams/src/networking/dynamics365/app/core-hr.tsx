import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CORE_HR = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/dynamics365/CoreHR.svg;strokeColor=none;',
  },
  _original_width: 68,
  _original_height: 68,
}

export function CoreHr(props: DiagramNodeProps) {
  return <Shape {...CORE_HR} {...props} _style={extendStyle(CORE_HR, props)} />
}
