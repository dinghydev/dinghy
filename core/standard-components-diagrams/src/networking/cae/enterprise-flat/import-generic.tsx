import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const IMPORT_GENERIC = {
  _style: {
    entity:
      'sketch=0;aspect=fixed;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;fillColor=#00188D;shape=mxgraph.mscae.enterprise.import_generic',
  },
  _original_width: 40,
  _original_height: 50,
}

export function ImportGeneric(props: DiagramNodeProps) {
  return (
    <Shape
      {...IMPORT_GENERIC}
      {...props}
      _style={extendStyle(IMPORT_GENERIC, props)}
    />
  )
}
