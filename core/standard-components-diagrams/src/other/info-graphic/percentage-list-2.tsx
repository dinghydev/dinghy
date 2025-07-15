import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const PERCENTAGE_LIST_2 = {
  _style:
    'whiteSpace=wrap;html=1;fixedSize=1;size=10;fillColor=#B1DDF0;strokeColor=none;',
  _width: 1,
  _height: 190,
}

export function PercentageList2(props: DiagramNodeProps) {
  return <Shape {...PERCENTAGE_LIST_2} {...props} />
}
