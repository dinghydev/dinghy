import { Columns, Shape } from '@dinghy/base-components'
import { Folder } from '@dinghy/diagrams/entitiesAwsGeneralResources'

export default () => (
  <Dinghy>
    <Folder _dependsBy={['engine', 'sites']}>core</Folder>
    <Columns>
      <Folder>engine</Folder>
      <Folder>docker</Folder>
      <Folder>sites</Folder>
    </Columns>
    <Columns>
      <Folder _dependsOn='engine'>cli</Folder>
      <Folder
        _dependsOn={['cli', 'docker', 'sites']}
        _dependsBy={['.github']}
      >
        tasks
      </Folder>
      <Folder>.github</Folder>
    </Columns>
  </Dinghy>
)

const Dinghy = (props: any) => (
  <Shape
    _title='Dinghy Top Level Folder Structure'
    _direction={'vertical'}
    {...props}
  />
)
