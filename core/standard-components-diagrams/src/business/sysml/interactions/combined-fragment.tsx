import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const COMBINED_FRAGMENT = {
  _style: {
    entity:
      'html=1;shape=mxgraph.sysml.package;labelX=100;html=1;overflow=fill;strokeWidth=1;recursiveResize=0;',
  },
  _width: 0,
  _height: 320,
}

export function CombinedFragment(props: DiagramNodeProps) {
  return (
    <Shape
      {...COMBINED_FRAGMENT}
      {...props}
      _style={extendStyle(COMBINED_FRAGMENT, props)}
    />
  )
}
