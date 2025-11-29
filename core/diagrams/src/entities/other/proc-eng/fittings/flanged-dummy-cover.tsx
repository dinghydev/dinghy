import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const FLANGED_DUMMY_COVER = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.fittings.flanged_dummy_cover;',
  },
  _width: 85,
  _height: 50,
}

export function FlangedDummyCover(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, FLANGED_DUMMY_COVER)} />
}
