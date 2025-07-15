import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const BITBUCKET_CODE_SOURCE = {
  _style:
    'verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;strokeColor=none;fillColor=#00BEF2;shape=mxgraph.azure.bitbucket_code_source;',
  _width: 42.5,
  _height: 50,
}

export function BitbucketCodeSource(props: DiagramNodeProps) {
  return <Shape {...BITBUCKET_CODE_SOURCE} {...props} />
}
