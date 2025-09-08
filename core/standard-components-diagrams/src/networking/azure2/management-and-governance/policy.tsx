import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const POLICY = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/management_governance/Policy.svg;strokeColor=none;',
  },
  _original_width: 60,
  _original_height: 64,
}

export function Policy(props: DiagramNodeProps) {
  return <Shape {...POLICY} {...props} _style={extendStyle(POLICY, props)} />
}
