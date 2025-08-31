import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CITRIX_VDA_FOR_MACOS = {
  _style: {
    entity:
      'sketch=0;verticalLabelPosition=bottom;sketch=0;aspect=fixed;html=1;verticalAlign=top;strokeColor=none;fillColor=#000000;align=center;outlineConnect=0;pointerEvents=1;shape=mxgraph.citrix2.citrix_vda_for_macos;',
  },
  _width: 36.230000000000004,
  _height: 50,
}

export function CitrixVdaForMacos(props: DiagramNodeProps) {
  return (
    <Shape
      {...CITRIX_VDA_FOR_MACOS}
      {...props}
      _style={extendStyle(CITRIX_VDA_FOR_MACOS, props)}
    />
  )
}
