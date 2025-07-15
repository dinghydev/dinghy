import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const ALPHABET_LIST = {
  _style:
    'verticalLabelPosition=bottom;verticalAlign=top;html=1;shadow=0;dashed=0;strokeWidth=1;shape=mxgraph.ios.iAlphaList;fontSize=7.5;',
  _width: 15,
  _height: 225,
}

export function AlphabetList(props: DiagramNodeProps) {
  return <Shape {...ALPHABET_LIST} {...props} />
}
