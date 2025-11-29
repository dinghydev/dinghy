import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const SEARCH_BOX = {
  _style: {
    entity:
      'strokeWidth=1;shadow=0;dashed=0;align=center;html=1;shape=mxgraph.mockup.forms.searchBox;strokeColor=#999999;mainText=;strokeColor2=#008cff;fontColor=#666666;fontSize=17;align=left;spacingLeft=3;whiteSpace=wrap;',
  },
  _width: 150,
  _height: 30,
}

export function SearchBox(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, SEARCH_BOX)} />
}
