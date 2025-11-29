import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const ALPHABET_LIST = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;verticalAlign=top;html=1;shadow=0;dashed=0;strokeWidth=1;shape=mxgraph.ios.iAlphaList;fontSize=7.5;',
  },
  _width: 15,
  _height: 225,
}

export function AlphabetList(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, ALPHABET_LIST)} />
}
