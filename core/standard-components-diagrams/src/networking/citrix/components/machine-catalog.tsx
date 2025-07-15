import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const MACHINE_CATALOG = {
  _style:
    'sketch=0;verticalLabelPosition=bottom;sketch=0;aspect=fixed;html=1;verticalAlign=top;strokeColor=none;fillColor=#000000;align=center;outlineConnect=0;pointerEvents=1;shape=mxgraph.citrix2.machine_catalog;',
  _width: 50,
  _height: 44.42,
}

export function MachineCatalog(props: DiagramNodeProps) {
  return <Shape {...MACHINE_CATALOG} {...props} />
}
