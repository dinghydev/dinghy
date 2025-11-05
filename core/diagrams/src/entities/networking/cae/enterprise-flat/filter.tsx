import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const FILTER = {
  _style: {
    entity:
      'sketch=0;aspect=fixed;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;fillColor=#00188D;shape=mxgraph.mscae.enterprise.filter',
  },
  _original_width: 50,
  _original_height: 45,
}

export function Filter(props: NodeProps) {
  return <Shape {...FILTER} {...props} _style={extendStyle(FILTER, props)} />
}
