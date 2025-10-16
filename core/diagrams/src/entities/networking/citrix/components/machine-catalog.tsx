import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const MACHINE_CATALOG = {
  _style: {
    entity:
      'sketch=0;verticalLabelPosition=bottom;sketch=0;aspect=fixed;html=1;verticalAlign=top;strokeColor=none;fillColor=#000000;align=center;outlineConnect=0;pointerEvents=1;shape=mxgraph.citrix2.machine_catalog;',
  },
  _original_width: 50,
  _original_height: 44.42,
}

export function MachineCatalog(props: DiagramNodeProps) {
  return (
    <Shape
      {...MACHINE_CATALOG}
      {...props}
      _style={extendStyle(MACHINE_CATALOG, props)}
    />
  )
}
