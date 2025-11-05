import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const VOLUME = {
  _style: {
    entity:
      'strokeColor=#999999;verticalLabelPosition=bottom;shadow=0;dashed=0;verticalAlign=top;strokeWidth=2;html=1;shape=mxgraph.mockup.misc.volumeIcon;',
  },
  _original_width: 25,
  _original_height: 25,
}

export function Volume(props: NodeProps) {
  return <Shape {...VOLUME} {...props} _style={extendStyle(VOLUME, props)} />
}
