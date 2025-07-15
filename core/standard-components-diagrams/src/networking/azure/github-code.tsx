import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const GITHUB_CODE = {
  _style:
    'verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;strokeColor=none;fillColor=#00BEF2;shape=mxgraph.azure.github_code;pointerEvents=1;',
  _width: 50,
  _height: 50,
}

export function GithubCode(props: DiagramNodeProps) {
  return <Shape {...GITHUB_CODE} {...props} />
}
