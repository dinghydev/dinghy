import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SEARCH_BOX = {
  _style:
    'strokeWidth=1;shadow=0;dashed=0;align=center;html=1;shape=mxgraph.mockup.forms.searchBox;strokeColor=#999999;mainText=;strokeColor2=#008cff;fontColor=#666666;fontSize=17;align=left;spacingLeft=3;whiteSpace=wrap;',
  _width: 150,
  _height: 30,
}

export function SearchBox(props: DiagramNodeProps) {
  return (
    <Shape {...SEARCH_BOX} {...props} _style={extendStyle(SEARCH_BOX, props)} />
  )
}
