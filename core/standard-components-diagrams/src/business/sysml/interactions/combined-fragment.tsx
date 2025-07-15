import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const COMBINED_FRAGMENT = {
  _style:
    'html=1;shape=mxgraph.sysml.package;labelX=100;html=1;overflow=fill;strokeWidth=1;recursiveResize=0;',
  _width: 0,
  _height: 320,
}

export function CombinedFragment(props: DiagramNodeProps) {
  return <Shape {...COMBINED_FRAGMENT} {...props} />
}
