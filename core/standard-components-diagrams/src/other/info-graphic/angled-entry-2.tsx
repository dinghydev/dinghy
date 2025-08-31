import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ANGLED_ENTRY_2 = {
  _style:
    'shape=mxgraph.infographic.parallelogram;dx=5;;html=1;fillColor=#B1DDF0;strokeColor=none;shadow=0;fontSize=17;fontColor=#FFFFFF;align=left;spacingLeft=10;fontStyle=1;whiteSpace=wrap;',
  _width: 1,
  _height: 30,
}

export function AngledEntry2(props: DiagramNodeProps) {
  return (
    <Shape
      {...ANGLED_ENTRY_2}
      {...props}
      _style={extendStyle(ANGLED_ENTRY_2, props)}
    />
  )
}
