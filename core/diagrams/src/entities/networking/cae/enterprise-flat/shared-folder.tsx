import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const SHARED_FOLDER = {
  _style: {
    entity:
      'sketch=0;aspect=fixed;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;fillColor=#00188D;shape=mxgraph.mscae.enterprise.shared_folder',
  },
  _original_width: 43,
  _original_height: 50,
}

export function SharedFolder(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, SHARED_FOLDER)} />
}
