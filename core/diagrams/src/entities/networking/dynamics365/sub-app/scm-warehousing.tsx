import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const SCM_WAREHOUSING = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/dynamics365/SCMWarehousing.svg;strokeColor=none;',
  },
  _original_width: 68,
  _original_height: 68,
}

export function ScmWarehousing(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, SCM_WAREHOUSING)} />
}
