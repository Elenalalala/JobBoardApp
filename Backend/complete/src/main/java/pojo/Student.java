package pojo;
import javax.persistence.*;

@Entity     // 作为hibernate 实体类
@Table(name = "tb_customer")       // 映射的 table 名在这定义
public class Student {

    /**
     * @Id：声明主键的配置
     * @GeneratedValue:配置主键的生成策略
     *      strategy
     *          GenerationType.IDENTITY ：自增，mysql
     *                 * 底层数据库必须支持自动增长（底层数据库支持的自动增长方式，对id自增）
     *          GenerationType.SEQUENCE : 序列，oracle
     *                  * 底层数据库必须支持序列
     *          GenerationType.TABLE : jpa提供的一种机制，通过一张数据库表的形式帮助我们完成主键自增
     *          GenerationType.AUTO ： 由程序自动的帮助我们选择主键生成策略
     * @Column:配置属性和字段的映射关系
     *      name：数据库表中字段的名称
     */

    @Id //表示这个 field 是 primary key
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id") //定义 column Name
    private Long custId; //客户的主键

    @Column(name = "name")
    private String custName;//客户名称

    @Column(name="class")
    private String custClass;//客户地址

    public Long getCustId() {
        return custId;
    }

    public void setCustId(Long custId) {
        this.custId = custId;
    }

    public String getCustName() {
        return custName;
    }

    public void setCustName(String custName) {
        this.custName = custName;
    }

    public String getCustClass() {
        return custClass;
    }

    public void setCustClass(String custClass) {
        this.custClass = custClass;
    }

    @Override
    public String toString() {
        return "Student{" +
                "custId=" + custId +
                ", custName='" + custName + '\'' +
                ", custClass='" + custClass + '\'' +
                '}';
    }
}
