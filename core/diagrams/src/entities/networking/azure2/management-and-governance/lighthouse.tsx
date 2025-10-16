import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const LIGHTHOUSE = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/management_governance/Azure_Lighthouse.svg;strokeColor=none;',
  },
  _original_width: 59,
  _original_height: 68,
}

export function Lighthouse(props: DiagramNodeProps) {
  return (
    <Shape {...LIGHTHOUSE} {...props} _style={extendStyle(LIGHTHOUSE, props)} />
  )
}
