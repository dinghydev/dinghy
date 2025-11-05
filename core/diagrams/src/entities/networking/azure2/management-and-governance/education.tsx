import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const EDUCATION = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/management_governance/Education.svg;strokeColor=none;',
  },
  _original_width: 67,
  _original_height: 52,
}

export function Education(props: NodeProps) {
  return (
    <Shape {...EDUCATION} {...props} _style={extendStyle(EDUCATION, props)} />
  )
}
