import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const LIGHTHOUSE = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/management_governance/Azure_Lighthouse.svg;strokeColor=none;',
  },
  _width: 59,
  _height: 68,
}

export function Lighthouse(props: DiagramNodeProps) {
  return (
    <Shape {...LIGHTHOUSE} {...props} _style={extendStyle(LIGHTHOUSE, props)} />
  )
}
