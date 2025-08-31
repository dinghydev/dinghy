import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const EXTERNAL_PERSON = {
  _style: {
    entity:
      'html=1;fontSize=11;dashed=0;whiteSpace=wrap;fillColor=#6C6477;strokeColor=#4D4D4D;fontColor=#ffffff;shape=mxgraph.c4.person2;align=center;metaEdit=1;points=[[0.5,0,0],[1,0.5,0],[1,0.75,0],[0.75,1,0],[0.5,1,0],[0.25,1,0],[0,0.75,0],[0,0.5,0]];resizable=0;',
  },
  _width: 0,
  _height: 180,
}

export function ExternalPerson(props: DiagramNodeProps) {
  return (
    <Shape
      {...EXTERNAL_PERSON}
      {...props}
      _style={extendStyle(EXTERNAL_PERSON, props)}
    />
  )
}
